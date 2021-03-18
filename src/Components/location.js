import React, {useState, useCallback} from 'react'
import ImageViewer from 'react-simple-image-viewer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Location = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    '/images/location1.jpg',
    '/images/location2.jpg',
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
    return (
        <div>
            <div style={{width:'100%', display:'inline-flex', backgroundColor:'white'}}>
                {images.map((src, index) => (
                    <div style={{alignItems:'center', display:'inline-block', width:'50%', margin:'50px 0'}}>
                        <div style={{width:'200px', height:'200px', margin:'auto'}}>
                            <img
                                src={ src }
                                onClick={ () => openImageViewer(index) }
                                // width="300"
                                key={ index }
                                style={{ margin: '2px', width:'40%', width:'200px', height:'200px' }}
                                alt=""
                            />
                        </div>
                    </div>
                ))}

                {isViewerOpen && (
                    <ImageViewer
                    src={ images }
                    currentIndex={ currentImage }
                    onClose={ closeImageViewer }
                    />
                )}
            </div>
            <div style={{backgroundColor:'white', margin:'0 20px'}}>
                <Tabs>
                    <TabList>
                    <Tab>Connectivity</Tab>
                    <Tab>Upcoming Social Infra</Tab>
                    <Tab>Location</Tab>
                    </TabList>

                    <TabPanel>
                        <div class="tab-content" id="pills-tabconnContent" style={{display:'flex', flexWrap:'wrap'}}> 
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i>20 mins* from Thane Majiwada circle, Located off Mumbai Nasik Highway</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Walking distance from upcoming Metro Station -Metro Line 5 which further connects to Metro line 4 connecting to Wadala and metro line 12 connecting to Taloja (Navi Mumbai)</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Excellent Education, Social &amp; Commercial Infra within 10-20-30 min distance in Thane, Kalyan &amp; Bhiwandi.</div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> 8 Lane 126km long Virar Alibaug Corridor planned by MMRDA</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Kalyan Business District to be completed by 2028- South Korean Gov partnering with Maharashtra Gov</div>
                            <div class="col my-2"   style={{maxWidth:'300px', margin:'0 10px'}} ><i class="fa fa-map-marker" aria-hidden="true"></i> 980-meter long Thane-Dombivali bridge which will reduce travel time from Mankoli to Dombivali</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> 701 km long expressway - Samruddhi Mahamarg which will connect Thane to Nagpur reducing the travel time</div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div style={{display:'flex', flexWrap:'wrap'}}>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Mumbai Nashik ExpressWay- 1min</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Upcoming Metro Stn - 1min</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Birla School &amp; College - 15 mins</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Metro Junction Mall - 15 mins</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Poddar International school- 15mins</div>
                            <div class="col my-2" style={{maxWidth:'300px', margin:'0 10px'}}><i class="fa fa-map-marker" aria-hidden="true"></i> Fortis Hospital - 15 mins</div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Location;