'use strict';

/* Directives */

var module = angular.module('itemSwipePaneDirective', []);

/*****************************************************************************/
/**************************    DIRECTIVE    **********************************/
/*****************************************************************************/
/***
 * item-swipe-pane creates container inside a ion-item, which is visible when
 * the item is swiped to the left or to the right.
 * Attribute "direction" controls swipe direction. Possible values are left or
 * right. Default direction is left.
 *
 * ### Notes
 * - Directive requires changes in ionItem directive and SlideDrag() class in
 *   ionic.bundle.js.
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
 *   Combination of
 *     <item-swipe-pane direction="left"> and <ion-option-button>
 *   is discouraged because both directives swipe from right to left, so they
 *   would overlap, however
 *     <item-swipe-pane direction="right"> and <ion-option-button> 
 *   is OK.
 */
var ITEM_SWIPE_PANE_TPL = '<div class="item-options invisible item-swipe-pane"></div>';
var DIRECTION_RIGHT_CLASS = 'direction-right';
module.directive( 'itemSwipePane' , function() {
    return {
        restrict:   'E',
        require:    '^ionItem',
        link: function (scope, $element, attrs, itemCtrl) {
            var container;
            var direction = 'left';
            // Set direction
            if (attrs['direction'] && attrs['direction'] === 'right'){
                direction = 'right';
            } else if (attrs['direction'] && attrs['direction'] === 'left'){
                direction = 'left';
            }

            if (direction === 'left'){
                if (!itemCtrl.itemSwipeLeft){
                    itemCtrl.itemSwipeLeft = angular.element(ITEM_SWIPE_PANE_TPL);
                    itemCtrl.$element.append(itemCtrl.itemSwipeLeft);
                }
                container = itemCtrl.itemSwipeLeft;
            } else if (direction === 'right'){
                if (!itemCtrl.itemSwipeRight){
                    itemCtrl.itemSwipeRight = angular.element(ITEM_SWIPE_PANE_TPL);
                    // If direction is right, move position of item options
                    // to the left - override inherited right:0; 
                    itemCtrl.itemSwipeRight.css({right: 'auto'});
                    // "direction-right" is container selector. 
                    itemCtrl.itemSwipeRight.addClass(DIRECTION_RIGHT_CLASS);
                    itemCtrl.$element.append(itemCtrl.itemSwipeRight);
                }
                container = itemCtrl.itemSwipeRight;
            }

            container.append($element);
            // Animation to slowly close opened item.
            itemCtrl.$element.addClass('item-right-editable');
        } // link

    }; // return
}); // item-swipe-pane
