import sectionTemplate from './section.component.html';


var sectionComponentController = function(){
};

export default {
  bindings: {
    innerid: "@",
    backgroundImg: "@",
  },
  transclude: true,
  template: sectionTemplate,
  controller: sectionComponentController
};
