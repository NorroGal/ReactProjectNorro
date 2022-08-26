import s from './Preloader.module.css';
import preloader from '../../../assets/images/loading-91.gif';

let Preloader = (props) => {
    return <div>
        <img className={s.preloader} src={preloader} />
    </div>
}

export default Preloader;