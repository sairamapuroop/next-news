import Image from "next/image";
// import Toolbar from "../components/toolbar";
import eomImage from "../public/EOM-image.jpg";
import classes from "../styles/EOM.module.css";

const EMPLOYEE = {
  name: "RandomDev",
  position: "Software Engineer",
  image: "",
  description: "Dev guy and Tech Geek",
};

function EOM(employee) {
  //    console.log(employee);
  
  return (
    <div className="page-container">

      {/* <Toolbar /> */}

      <div className={classes.main}>
        <h1>Employee Of The Month</h1>

        <div className={classes.employeeOfTheMonth}>
          <h3>{EMPLOYEE.name}</h3>
          <h6>{EMPLOYEE.position}</h6>
          <Image src={eomImage} alt="Check back later" />
          <p>{EMPLOYEE.description}</p>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(pageContext) {
  
  //     // fetch('https://my-json-server.typicode.com/portexe/next-news/employee0fTheMonth', {
    //     //     method: 'POST',
    //     //     headers: {
      //     //         'Content-Type': 'application/json'
      //     //     },
      //     //     body: JSON.stringify(EMPLOYEE),
      //     // });
      
      //     // const response = await fetch('https://my-json-server.typicode.com/portexe/next-news/employee0fTheMonth');
      
      //     // const employee = await response.json();
      
      //     return {
        //         props: {
          //             employee: EMPLOYEE,
          //         }
          //     }
          // }
          
          export default EOM;
          
          // "https://pbs.twimg.com/profile_images/1345080486385901568/r-Et9x5E_400x400.jpg",