define(['knockout'],
  function (ko) {
    function model (context) {
      var self = this;

    context.props.then(function(properties) {
    });

    self.expenseType = ko.observable();
    self.expenseCost = ko.observable();
    self.taxrate = ko.observable();
    self.tax = ko.computed(function() {
      if(typeof self.expenseCost() != 'number' || typeof self.taxrate() != 'number') {
        return null;
      }
      return (self.expenseCost() - self.expenseCost()/(1+self.taxrate()));
    }, this);

    self.deleteExpense = function() {
      // TODO
    };


  }

    return model;
  }
)
