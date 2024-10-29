import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {

  return (
    <>
    <div className={styles.page}>
        <main className={styles.main}>         
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">K9ALK</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About me</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">FAQ</a>
                                <a className="dropdown-item" href="#">My Bio</a>
                                <a className="dropdown-item" href="#">My dreams</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        
            <div className="w-100" style={{overflow: "hidden", maxHeight: "490px"}}>
{/* 
                <Image 
                    src="/public/me.png"       
                    width={500}
                    height={500}
                    alt="a picture of Alex Cunningham"
                /> */}
            </div>    
        <div className="text-center no-margin" id="about-me">
                <h1>Hi, Welcome to my home page!</h1>
                <p className="lead">My name is Alex Cunningham, but I like to be called Alek, and aspire to be a computer scientist.</p><br/>
                <p>I have always loved computers because they made me wonder how they work. I put together a computer myself when I was 6. <br/>
                I installed the modem and had it on AOL in one day. My parents were astonished.</p><br/>
                <p>To learn more about me visit my bio!</p>
        </div>
            
        <div className="no-margin" id="exp">
            <h3>My language experience </h3>
            <div id="skills">
                HTML:
                    <div className="html">
                        5 years
                    </div>
                JavaScript:
                    <div className="javascript">
                        2 years
                    </div>
                CSS:
                    <div className="css">
                        4 years
                    </div>
                Python:
                    <div className="python">
                        1 year
                    </div>
                </div>
                
            </div>

        <div id="footer">©copyright 2019 Alex Cunningham<br/><a href="#">Site map</a></div>

      </main>
    </div>
    </>
  );
}
