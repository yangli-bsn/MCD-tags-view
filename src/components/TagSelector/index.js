import React from 'react';
import Autocomplete from 'react-autocomplete';

import store from 'store';
import { connect } from 'react-redux';
import { addTag, removeTag } from 'tags/actions';

import TagsData from 'data/Tags';

import { ReactComponent as CrossIcon } from 'assets/cross.svg';

import './TagSelector.css';

class TagSelector extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		value: ''
  	};

  	this.onChange = this.onChange.bind(this);
  	this.onSelect = this.onSelect.bind(this);
  	this.shouldItemRender = this.shouldItemRender.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
  }

  deleteTag(tag) {
    store.dispatch(removeTag(tag));
  }

  onChange(e) {
  	this.setState({value: e.target.value});
  }

  onSelect(val) {
    store.dispatch(addTag(val));
  }

  shouldItemRender(item, value) {
  	return item.toLowerCase().includes(value.toLowerCase());
  }

  render() {
    let { selectedTags } = store.getState();

  	const inputStyle = {
  		width: 266,
  		height: 50,
  		fontSize: 28
  	};

  	const itemStyle = {
      paddingLeft: 10,
      paddingTop: 10,
  		height: 40,
  		fontSize: 26,
      cursor: 'pointer'
  	};

	return (
	  <div className='tag-selector'>
	  	<div className='tag-title'>
	  		Tags
	  	</div>
	    <Autocomplete
  		  getItemValue={(item) => item}
  		  items={TagsData}
  		  renderItem={(item, isHighlighted) =>
  		    <div key={item}
  		    	style={{...itemStyle, background: isHighlighted ? 'lightgray' : 'white' }}>
  		      {item}
  		    </div>
  		  }
  		  shouldItemRender={this.shouldItemRender}
  		  inputProps={{placeholder: 'Select Tags', style: inputStyle}}
  		  value={this.state.value}
  		  onChange={ this.onChange }
  		  onSelect={ this.onSelect }
  		  wrapperStyle={{marginLeft: 15}}
  		/>
      <div className='selected-tags'>
        {
          selectedTags.map((tag, index) => {
            return (
              <div key={index}
                className='single-selected-tag'>
                <div className='tag-text'>
                  { tag }
                </div>
                <CrossIcon onClick={() => this.deleteTag(tag)} className='tag-cross-svg'/>
              </div>
            );
          })
        }
      </div>
	  </div>
	);
  }
}

const mapStateToProps = state => {
  return {
    selectedTags: state.selectedTags
  }
};

export default connect(mapStateToProps)(TagSelector);
