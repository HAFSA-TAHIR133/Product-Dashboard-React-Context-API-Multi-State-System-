import {useActivityContext} from '../contexts/activityContext'
import {useThemeContext} from '../contexts/themeContext'
import { useNewProductCountContext } from '../contexts/newProductCountContext';
import '../App.css'

function Analytics(){
    const {theme}=useThemeContext();
    const {activityCount} = useActivityContext();
    const {newProductCount} =useNewProductCountContext();
    return(
    <div className={`analytics-page theme-setting ${theme}`}>
        <h1>Total Cart Products: {activityCount}</h1>
        <h2>Total New Products added: {newProductCount}</h2>
    </div>
        
    );
};


export default Analytics;