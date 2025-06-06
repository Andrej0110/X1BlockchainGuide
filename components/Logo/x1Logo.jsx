import Tilt from 'react-parallax-tilt';
import './Logo.css';
import x1LogoSmall from './x1-logo_small.webp';
import x1LogoBig from './x1-logo_big.webp';

const Logo = () => {
	return (
		<div className="ma4 mt0">
		    <Tilt options={{max: 55}} style={{height: 48, width: 48}}>
		      <div className="Title-inner pa3">
		      	<a href="https://x1.xyz" target="_blank" rel="noopener noreferrer">
		      	<img className="mr-2 shadow-xl bg-slate-600 rounded-full p-2 hover:bg-sky-900" src={x1LogoSmall} srcSet={x1LogoBig} alt="X1 Blockchain Logo"/>
		      	</a>
		      </div>
		    </Tilt>
		</div>

	);
}


export default Logo;

