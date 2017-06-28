import storyTemplate from './story.component.html';

const MAX_WORD_COUNT = 50;

window.onhashchange = function(e){
  e.stopPropagation();
  e.preventDefault(); 
  console.log(e);
  return false;
};

var storyComponentController = ['$location', function($location){
  var modal_id;
  var $ctrl = this;
  $ctrl.zoomed = false;
  

  $ctrl.$onInit = () => {
    modal_id = 'story' + $ctrl.story.id;
    $ctrl.componentURL = window.location.href + '#' + modal_id;
    $ctrl.story.short = $ctrl.story.story.split(' ', MAX_WORD_COUNT).join(' ');
    $ctrl.story.name = $ctrl.story.name || '(Anonymous)';


    $ctrl.zoom = () => {
      window.location.hash = modal_id;
      $ctrl.zoomed = true;
    };
  };

  // set timeout with 0 so that the listening is registered when all the DOM are rendered
  setTimeout(() => {
    $(`#${modal_id}`).on('hidden', function(e){
      window.location.hash = '_';
      $ctrl.zoomed = false;
    });
    if(modal_id === $location.hash()) $(`a[href="#${modal_id}"]`).trigger('click');
  }, 0);
}];

export default {
  bindings: {
    story: '=',
  },
  template: storyTemplate,
  controller: storyComponentController
};
