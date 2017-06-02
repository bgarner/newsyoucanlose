import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '115663625688056',
    secret: '5361f1e1b1a56eacd2c94b29da8fdb5e'
});

Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
});


Meteor.startup(() => {
  // code to run on server at startup


});
