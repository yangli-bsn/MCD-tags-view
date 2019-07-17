import controllerData from 'data/ControllerData';
import AllTags from 'data/Tags';

function convertControllerData() {
  let final = {};
  AllTags.forEach((tag, index) => {
    // Initiate ControllerByTag
    final[tag] = [];
    controllerData.forEach((controller, index) => {
      if (controller.tags.includes(tag)) {
        final[tag].push(controller);
      }
    });
  });

  return final;
}

const controllerByTag = convertControllerData();

export default controllerByTag;