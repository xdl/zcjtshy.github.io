import storiesTemplate from './stories.component.html';

var storiesComponentController = ['storiesService', function(storiesService){
  var $ctrl = this;
  $ctrl.stories = [];
  storiesService.getStories().then(stories => {
    $ctrl.stories = stories;
  });
}];

export var storiesComponent = {
  template: storiesTemplate,
  controller: storiesComponentController
};
