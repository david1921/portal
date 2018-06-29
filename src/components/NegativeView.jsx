import React from 'react'
require('../styles/app.css');

const NegativeView = ({review,i}) => (<li key = {i}> {review}</li>);

export default NegativeView;