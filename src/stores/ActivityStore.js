import Reflux from 'reflux';
import HttpService  from '../HttpService'
import ActivityActions  from  '../ActivityActions'

let ActivityStore = Reflux.createStore({
  listenables: [ActivityActions],

  getActivities: function(params) {
    HttpService.get('/activities.json', params)
          .then(function(json) {
            this.result = json;
            this.fireUpdate();
          }.bind(this));
  },


  fireUpdate: function() {
    this.trigger(this.result);
  }

});


export default ActivityStore;
