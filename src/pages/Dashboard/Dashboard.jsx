import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber } from '../../data';
import css from './Dashboard.module.css';
const Dashboard = () => {
  return <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>
      
      <div className="dashboard-card">
      <div className={`${css.dashboardHead} `}>
        <div className={css.head}>
          <span>Dashboard</span>
        
        </div> 
      </div>

      <div className={`${css.dashboardHead} `}>
        <div className={css.head}>
          <span>Dashboard</span>
          
        </div> 
      </div>

      <div className={`${css.dashboardHead} `}>
        <div className={css.head}>
          <span>Dashboard</span>
          
        </div> 
      </div>
      </div>


      <Statistics/>

    </div>


  </div>
}

export default Dashboard