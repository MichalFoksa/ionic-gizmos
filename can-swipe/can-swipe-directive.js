'use strict';

/* Directives */

var module = angular.module('canSwipeDirective', []);

/*****************************************************************************/
/**************************    DIRECTIVE    **********************************/
/*****************************************************************************/
/***
 * can-swipe is an attribute directive which will cause an ion-item element .... TODO
 * to hide when keyboard shows.
 * the item is swiped to the left or to the right.
 * Attribute "direction" controls swipe direction. Possible values are left or
 * right. Default direction is left.
 *
 * @usage
 *
 * ```html
 *   <ion-item>
 *     <item-swipe-pane direction="right">
 *       <button class="button icon ion-arrow-right-c"></button>
 *       Right swipe
 *     </item-swipe-pane>
 *   </ion-item>
 * ```
 *
 * ### Known issues:
 *
 */
module.directive('canSwipe', function() {
  return {
    restrict: 'A',
    require:  '^ionItem',
    link: function(scope, element, attr, itemCtrl) {

      if(attr.canSwipe !== null && attr.canSwipe.length > 0 &&
         typeof(!!attr.canSwipe) === "boolean") {
        scope.$watch('!!(' + attr.canSwipe + ')', function(value) {
          canSwipe(value);
        });
      }

      canSwipe(attr.canSwipe === 'true');

      function canSwipe(can) {
        if (!itemCtrl.optionsContainer) {
          return;
        }
        // Class item-options is the flag for ionic.views.ListView whether
        // item can be swiped (dragged):
        //    if (item && item.querySelector('.item-options')) { do drag ...}
        itemCtrl.optionsContainer.toggleClass('item-options', can);
        // Hide options button container.
        itemCtrl.optionsContainer.toggleClass('ng-hide', !can);
      } // canSwipe

    } // link
  }; // return
}) // can-swipe directive
