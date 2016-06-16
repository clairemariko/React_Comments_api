var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox.jsx');


//we are now asking it to look for the server that is now concerned with the api. 
window.onload = function(){
  ReactDOM.render(
    <CommentBox url="http://localhost:5000/api/comments"/>,
    document.getElementById('app')
  );
}
