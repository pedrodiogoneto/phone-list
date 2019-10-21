import React from 'react';
import styled from 'styled-components'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/store'


const App = () => (
	<Provider store={configureStore()}>
		<HomepageWrapper>
			<Homepage />
		</HomepageWrapper>
	</Provider>
);

export default App;

const HomepageWrapper = styled.div`
	padding: 10%;
	height: 100%;
	min-height: 100vh;
`

