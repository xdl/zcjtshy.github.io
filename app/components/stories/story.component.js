import storyTemplate from './story.component.html';

const MAX_WORD_COUNT = 50;

var storyComponentController = ['$location', '$sce', function($location, $sce){
  var modal_id;
  var $ctrl = this;
  $ctrl.zoomed = false;
  

  $ctrl.$onInit = () => {
    modal_id = 'story' + $ctrl.story.id;
    $ctrl.componentURL = window.location.href + '#' + modal_id;
    // There's a danger here of splitting a string down an html tag.
    $ctrl.story.short = $sce.trustAsHtml($ctrl.story.story.split(' ', MAX_WORD_COUNT).join(' '));
    $ctrl.story.story = $sce.trustAsHtml($ctrl.story.story);
    $ctrl.story.name = $ctrl.story.name || '(Anonymous)';
  };

  $ctrl.zoom = () => {
    $location.hash(modal_id);
    $ctrl.zoomed = true;
  };

  // set timeout with 0 so that the listening is registered when all the DOM are rendered
  setTimeout(() => {
    $(`#${modal_id}`).on('hidden', function(e){
      window.location.hash = '!';
      $ctrl.zoomed = false;
    });
    if(modal_id === $location.hash()) $(`#storycard${$ctrl.story.id}`).trigger('click');
  }, 0);
}];

export default {
  bindings: {
    story: '=',
  },
  template: storyTemplate,
  controller: storyComponentController
};
