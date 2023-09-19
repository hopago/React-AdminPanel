import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget = ({ type }) => {

    let data;
    // amount
    const amount = 100;
    const different = 20;
    switch(type) {
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlinedIcon className='icon' 
                    style={{ color: "#9EB384", backgroundColor: "#CEDEBD" }} 
                    />
                )
            };
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className='icon' 
                    style={{ color: "lightgray", backgroundColor: "#040D12" }}
                    />
                )
            };
            break;
        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className='icon' 
                    style={{ color: "#FF9B50", backgroundColor: "#FBF0B2" }} 
                    />
                )
            };
            break;
        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className='icon' 
                    style={{ color: "#053B50", backgroundColor: "#64CCC5" }} 
                    />
                )
            };
            break;
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="number">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon /> {different} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
