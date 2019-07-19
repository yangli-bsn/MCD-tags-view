import React, { Component } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import store from 'store';
import { connect } from 'react-redux';
import { assignTagVisuals } from 'tags/actions';

import strToComponent from 'utils/strToComponent';
import controllersByTag from 'utils/convertControllerData';

const getItems = items =>
  items.map((item, index) => ({
    id: `item-${index}`,
    content: item
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 5;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,
  borderRadius: '5px',
  borderStyle: 'solid',
  borderColor: '#D1D1D1',
  borderWidth: '1px',
  boxShadow: isDragging ? '1px 1px 10px grey' : '',
  // change background colour if dragging
  background: 'white',
  transition: '200ms',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  transition: '200ms',
  background: isDraggingOver ? '#D1D1D1' : 'white',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

class DraggableConfig extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    let { currentTag } = this.props;
    let { tagPanelVisuals } = store.getState();
    let prevItems = currentTag ? tagPanelVisuals[currentTag] : [];

    const items = reorder(
      prevItems,
      result.source.index,
      result.destination.index
    );

    store.dispatch(assignTagVisuals(currentTag, items));
  }

  render() {
    let { currentTag } = this.props;
    let { tagPanelVisuals } = store.getState();
    let items = currentTag ? getItems(tagPanelVisuals[currentTag]) : [];
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <div className='draggable-title' style={{marginBottom: '10px'}}>
                        { item.content }
                      </div>
                      { strToComponent(
                          item.content, 
                          controllersByTag[currentTag], 
                          {width: 320, height: 200}) }
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  return {
    tagPanelVisuals: state.tagPanelVisuals
  }
};

export default connect(mapStateToProps)(DraggableConfig);