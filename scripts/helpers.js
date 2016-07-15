let helpers =  {
  $class : {
      hasClass: function( elem, c ) {
          return elem.classList.contains( c );
      },
      addClass: function( elem, c ) {
        elem.classList.add( c );
      },
      removeClass: function( elem, c ) {
        elem.classList.remove( c );
      }
  }
}

export default helpers;