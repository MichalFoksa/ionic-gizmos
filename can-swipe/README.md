# can-swipe

`can-swipe` is an attribute directive which can enable/disable swipe functionality of an individual `ion-item` element. Attribute possible values are true or false.

## Examples

Example with one option button:

    <ion-item can-swipe="false">
      <ion-option-button class="button-assertive" ng-click="edit(item)">
        Edit
      </ion-option-button>
    </ion-item>

Example with option, delete and reorder buttons. Bellow is its animation. Live on [Codepen](http://codepen.io/MichalFoksa/pen/BLNQYw).

    <ion-item ng-repeat="item in items" can-swipe="item.canSwipe">
      Item {{ item.id }}. Can swipe: {{ item.canSwipe }}
      <ion-delete-button class="ion-minus-circled">
      </ion-delete-button>
      <ion-option-button class="button-assertive">
        Edit
      </ion-option-button>
      <ion-option-button class="button-calm">
        Share
      </ion-option-button>
      <ion-reorder-button class="ion-navicon"></ion-reorder-button>
    </ion-item>

![alt text](https://raw.githubusercontent.com/MichalFoksa/ionic-gizmos/master/img/can-swipe-example1.gif "can-swipe example")

## Like it?

Give it a vote on [StackOverflow](http://stackoverflow.com/questions/29021430/ionic-disable-swiping-on-individual-ion-items-programmatically/39385183#39385183).
