import logo from './logo.svg';
import './App.css';
import FetchData from './components/FetchData';
import pp from './image/pp.jpg'
import ReactDOM from 'react-dom';
// import { SocialIcon } from 'react-social-icons';
// ReactDOM.render(<SocialIcon network="instagram" />, document.body);
function App() {
  return (
    <header>
      
      <h1 align="left"><i><a href="https://www.instagram.com/">Instagram</a></i></h1>
      {/* var React = require('react');
var { SocialIcon } = require('react-social-icons');
      React.render(<SocialIcon network="instagram" />, document.body); */}
	<div className="container">

		<div className="profile">

			<div className="profile-image">

				<img src={pp} alt="profile picture" />

			</div>

			<div className="profile-user-settings">

				<h1 className="profile-user-name">virat.kohli</h1>

				<button className="btn profile-edit-btn" color='blue'>Follow</button>

				<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div className="profile-stats">

				<ul>
					<li><span className="profile-stat-count">1,493</span> posts</li>
					<li><span className="profile-stat-count">230M</span> followers</li>
					<li><span className="profile-stat-count">262</span> following</li>
				</ul>

			</div>

			<div className="profile-bio">

				<p><b>Virat Kohli</b><br></br>
        Carpediem!<br></br>
        <a href="https://one8.com/">one8.com</a></p>

			</div>

		</div>
		

	</div>



	<div className="container">

  <div className="gallery">

    <div className="gallery-item" tabIndex="0">

      <FetchData className="gallery-image" />

      <div className="gallery-item-info">

        <ul>
          <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
          <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
        </ul>

      </div>

    </div>
    </div>
    </div>
    </header>
  );
}


export default App;
