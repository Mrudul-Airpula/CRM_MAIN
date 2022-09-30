import "./AdminDash.css";
import Topbar from './Topbar';
import LeftBar from './LeftBar';
import Horizontalbar from './Horizontalbar';
import List from './List';
import Progressbar from './Progressbar';
import Bargraph from './Bargraph';
import Summary from './Summary';
import SummaryC from './SummaryC';

export default function AdminDash() {
    return <>
        <div className='Admin_page'>
            <div className='Admin_page_column1'>
                <div className='Admin_page_column1_topbar'>
                    <Topbar />
                </div>
            </div>
            <div className='Admin_page_contentpart'>
                <div className='Admin_page_contentpart_leftbar'>
                    <LeftBar />
                </div>
                <div className='Admin_page_contentpart_main'>
                    <div className='Admin_page_contentpart_main_row1'>
                        <Bargraph />
                        <Horizontalbar/>
                    </div>
                    <div className='Admin_page_contentpart_main_row2'>
                        <div className="Admin_page_contentpart_main_row2_innerrow1">
                            <Summary />
                        </div>
                        <div className="Admin_page_contentpart_main_row2_innerrow2">
                            <SummaryC />
                            <Progressbar />
                        </div>
                    </div>
                </div>
                <div className='Admin_page_contentpart_list'>
                    <List />
                </div>
            </div>
        </div >
    </>
}