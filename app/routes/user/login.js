import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    let session = this.get("session").fetch().catch(function() {});
    console.log(session);
    return session;
  },

  actions: {
    loginWithSocialMedia: function(provider) {
      console.log(provider);
      this.get("session").open("firebase", { provider: provider}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
