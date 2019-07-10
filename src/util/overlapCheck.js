function getBoundingRect(tag) {
  let rect = {
    tl: { 
      x: tag.position.x,
      y: tag.position.y
    },
    tr: {
      x: tag.position.x + tag.size.width,
      y: tag.position.y
    }, 
    bl: {
      x: tag.position.x,
      y: tag.position.y + tag.size.height 
    },
    br: {
      x: tag.position.x + tag.size.width,
      y: tag.position.y + tag.size.height
    }
  };

  return rect;
}

function isPointinRect(point, rect) {
  if (point.x >= rect.tl.x && point.y >= rect.tl.y &&
      point.x <= rect.tr.x && point.y >= rect.tr.y &&
      point.x >= rect.bl.x && point.y <= rect.bl.y &&
      point.x <= rect.br.x && point.y <= rect.br.y) {
    return true;
  }
  else {
    return false;
  }
}

function areTwoRectsOverlapped(rect1, rect2) {
  if (isPointinRect(rect1.tl, rect2) ||
      isPointinRect(rect1.tr, rect2) ||
      isPointinRect(rect1.bl, rect2) ||
      isPointinRect(rect1.br, rect2) ||
      isPointinRect(rect2.tl, rect1) ||
      isPointinRect(rect2.tr, rect1) ||
      isPointinRect(rect2.bl, rect1) ||
      isPointinRect(rect2.br, rect1)) {
    return true;
  }
  else {
    return false;
  }
}

export default function isOverlapped(tags, tag) {
  let overlapped = false;
  let currentTagRect = getBoundingRect(tag);
  Object.keys(tags).forEach((key) => {
    if (key !== tag.tagName) {
      let otherTagRect = getBoundingRect(tags[key]);
      if (areTwoRectsOverlapped(otherTagRect, currentTagRect)) {
        overlapped = true;
      }
    }
  });

  return overlapped;
}