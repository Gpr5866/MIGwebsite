import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Widget from '../../components/widget/widget'
import Chart from '../../components/chart/chart'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import WarehouseRoundedIcon from '@mui/icons-material/WarehouseRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import TravelExploreRoundedIcon from '@mui/icons-material/TravelExploreRounded';

const Home = () => {
  return (
    <div className='home' >
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="homeContent">
          <div className="left">
            <div className="infoTop">
              <div className="profileBg">
                <div className="profilePics">
                  <img src='https://media-exp1.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=1668038400&v=beta&t=mM7KTv0fWZOjgmznEUcsW9ZNuj69zZ3KJVqLZ8NNQGI' alt='' className='avatar' />
                </div>
              </div>
            </div>
            <div className="infoMiddle">
              <div className="companyName">Mitramas Infosys Global</div>
              <div className="companyNameDetail">IT Consultant</div>
              <div className="editProfile">
                <CreateRoundedIcon className='iconEditProfile' />
                Edit Profile
              </div>
            </div>
            <div className="infoBottom">
              <div className="infoContent">
                <div className="sectionTitle">Company Status</div>
                <div className="sectionDetailAktif">
                  <div className="aktifText"><span>Aktif</span></div>
                  <div className="aktifSwitch">
                    <Switch defaultChecked className='switch' />
                  </div>
                </div>
                <div className="sectionTitle">Abbreviation</div>
                <div className="sectionDetail">MIG</div>
                <div className="sectionTitle">Company Address</div>
                <div className="sectionDetail">Jl. Tebet Raya No.42, Jakarta Selatan</div>
                <div className="sectionTitle">Person In Charge (PIC)</div>
                <div className="sectionDetail">John Doe</div>
                <div className="sectionTitle">PKP Date</div>
                <div className="sectionDetail">03 March 2021</div>
                <div className="sectionTitle">Email</div>
                <div className="sectionDetailEmail">
                  <EmailRoundedIcon className='iconEmail' />
                  <div className="emailText">mig@mitrasolusi.group</div>
                </div>
                <div className="sectionTitle">Phone Number</div>
                <div className="sectionDetailPhone">
                  <CallRoundedIcon className='iconPhone' />
                  <div className="phoneText">021-5678-1234</div>
                </div>
                <div className="sectionTitle">Websites</div>
                <div className="sectionDetailWebsite">
                  <TravelExploreRoundedIcon className='iconWebsite' />
                  <div className="websiteText">mitramas.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="location-bar">
              <div className="locationTitle">
                <h2>Location</h2>
                <span>See All</span>
              </div>
              <div className='hub'>
                <div className="main">
                  <div className="mainContent">
                    <MapsHomeWorkRoundedIcon className='icon' />
                    <div className="sub">
                      <div className='amount'><span >20</span></div>
                      <div className='text'><span >Main</span></div>
                    </div>
                  </div>
                </div>
                <div className="sublv1"><div className="mainContent">
                  <ConstructionRoundedIcon className='icon' />
                  <div className="sub">
                    <div className='amount'><span >3</span></div>
                    <div className='text'><span >Sub Location Level 1</span></div>
                  </div>
                </div></div>
                <div className="sublv2"><div className="mainContent">
                  <WarehouseRoundedIcon className='icon' />
                  <div className="sub">
                    <div className='amount'><span >1</span></div>
                    <div className='text'><span >Sub Location Level 2</span></div>
                  </div>
                </div></div>
              </div>
            </div>
            <div className="rightBottom">
              <div className="rightBottom1">
                <div className="rb1">
                  <div className="title">
                    <span>Bank Account</span>
                    <div className="buttonSave">
                      <Button variant='contained' size='medium' color='success'>+ Add Bank Account</Button>
                    </div>
                  </div>
                  <div className="bodyrb1">
                    <div className="content1">
                      <div className="c1">
                        <span>VISA</span>
                      </div>
                      <div className="c2">
                        <div className="cardName">
                          <div className="cn1">
                            <span>Bank KB Bukopin</span>
                          </div>
                          <div className="cn2">
                            <CreateRoundedIcon className='iconCreate' />
                            <DeleteRoundedIcon className='iconDelete' />
                          </div>
                        </div>
                        <div className="cardDetail">****0876 . Yusron Taufiq</div>
                        <div className="cardCurrency">IDR</div>
                      </div>
                    </div>
                    <div className="content2">
                      <div className="c1">
                        <span>VISA</span>
                      </div>
                      <div className="c2">
                        <div className="cardName">
                          <div className="cn1">
                            <span>Citibank, NA</span>
                          </div>
                          <div className="cn2">
                            <CreateRoundedIcon className='iconCreate' />
                            <DeleteRoundedIcon className='iconDelete' />
                          </div>
                        </div>
                        <div className="cardDetail">****5525 . Si Tampan</div>
                        <div className="cardCurrency">USD</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rb2">
                  <div className="title">
                    <span>Relation</span>
                    <div className="titleSeeAll"><span>See All</span></div>
                  </div>
                  <div className="bodyrb2">
                    <div className="contentbodyrb2">
                      <div className="contentRelation1">
                        <div className="contentRelation1-1">
                          <ShareOutlinedIcon className='iconShare' />
                        </div>
                        <div className="contentRelation1-2">
                          <div className="cAmount"><span>20</span></div>
                          <div className="cText"><span>Memiliki</span></div>
                        </div>
                      </div>
                      <div className="contentRelation1">
                        <div className="contentRelation1-1">
                          <ShareOutlinedIcon className='iconShare' />
                        </div>
                        <div className="contentRelation1-2">
                          <div className="cAmount"><span>108</span></div>
                          <div className="cText"><span>Menggunakan</span></div>
                        </div>
                      </div>
                      <div className="contentRelation1">
                        <div className="contentRelation1-1">
                          <ShareOutlinedIcon className='iconShare' />
                        </div>
                        <div className="contentRelation1-2">
                          <div className="cAmount"><span>67</span></div>
                          <div className="cText"><span>Meminjam</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightBottom2">
                <div className="activitySection">
                  <div className="activityTitle"><span>Activity</span></div>
                  <div className="activityBody">
                    <div className="bodyContent">
                      <div className="contentText">
                        <span>
                        yusron added a new location for the Jagakarsa branch office
                        </span>
                      </div>
                      <div className="contentDate">
                        <span>
                          Today, 08.00
                        </span>
                      </div>
                      <div className="contentText">
                        <span>
                        Bintang just deleted a Tebet sublocation branch office from Tebet branch office
                        </span>
                      </div>
                      <div className="contentDate">
                        <span>
                          Yesterday, 17.32
                        </span>
                      </div>
                      <div className="contentText">
                        <span>
                          Yusron change the profile of the Bekasi branch office
                        </span>
                      </div>
                      <div className="contentDate">
                        <span>
                          Yesterday, 15.45
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Chart />
        </div> */}
      </div>
    </div>
  )
}

export default Home