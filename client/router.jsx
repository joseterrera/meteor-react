FlowRouter.route('/', {
    name: 'discover',
    action: function(params) {
        console.log("This is my discover page", params.home);
    },
});

FlowRouter.route('/favorites', {
    name: 'favorites',
    action: function(params) {
        console.log("This is my favorites page", params.home);
    },
});

FlowRouter.route('/settings', {
    name: 'settings',
    action: function(params) {
        console.log("This is my settings page", params.home);
    },
});

FlowRouter.route('/other', {
    name: 'other',
    action: function(params) {
        console.log("This is my other page", params.home);
    }
});


if (Meteor.isClient) {
  // This code is executed on the client only

  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<Discover/>, document.getElementById("app"));
  });
}


// const routes = (
//   <ReactRouter.Route name="root" handler={AppBody}>
//     <ReactRouter.Route name="home" path="/" handler={Home} />
//     <ReactRouter.Route name="other" path="/other" handler={Other} />
//     <ReactRouter.Route name="settings" path="/settings" handler={Settings} />
//     <ReactRouter.DefaultRoute handler={AppLoading} />
//     <ReactRouter.NotFoundRoute handler={AppNotFound} />
//   </ReactRouter.Route>
// );
// Meteor.startup(function () {
//   ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Handler, state) {
//     React.render(<Handler />, document.getElementById("app"));
//  });
// });