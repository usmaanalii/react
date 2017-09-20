import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  
  goToStore(event) {
    // grab the text from the box
    event.preventDefault();
    console.log('You changed the URL');
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // transition route
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(event) => this.goToStore(event)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;