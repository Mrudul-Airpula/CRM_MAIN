import "./ManagerDash.css";
import Topbar from './Topbar';
import LeftBar from './LeftBar';
import Horizontalbar from './Horizontalbar';
import Progressbar from './Progressbar';
import Bargraph from './Bargraph';
import Summary from './Summary';
import SummaryC from './SummaryC';

export default function ManagerDash() {
    return <>
        <div className="ManagerDash_page">
            <div className="ManagerDash_page_topbar">
                <Topbar />
            </div>
            <div className="ManagerDash_page_content">
                <div className="ManagerDash_page_content_leftbar">
                    <LeftBar />
                </div>
                <div className="ManagerDash_page_content_area">
                    <div className="ManagerDash_page_content_area_row1">
                        <Bargraph />
                        <Horizontalbar />
                    </div>
                    <div className="ManagerDash_page_content_area_row2">
                        <div className="ManagerDash_page_content_area_row2_summary">
                            <Summary />
                        </div>
                        <div className="ManagerDash_page_content_area_row2_bars">
                            <SummaryC />
                            <Progressbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}