import React, { Component } from "react";
import "./index.css";
import Styling from "./status.module.css";

import Button from "../../component/Button/index";
import NavBar from "../../component/NavBar/index";
import AppTable from "../../component/AppTable/index";
import Star from "../../component/Star/index";
import Footer from "../../component/Footer/index";

import Pic from "../../assets/image-placement.svg";
import GoTop from "../../assets/to-top.svg";

class MyApp extends Component {
  state = {
    winSize: 0,
    showGoTopBtn: false,
    appList: [
      {
        title: "App title 1",
        creator: "Netfront",
        status: "Published",
        stars: 3.2
      },
      {
        title: "App title 2",
        creator: "Netfront",
        status: "Published",
        stars: 4.8
      },
      {
        title: "App title 3",
        creator: "Netfront",
        status: "Unpublished",
        stars: 4.0
      },
      {
        title: "App title 4",
        creator: "Netfront",
        status: "Published",
        stars: 3.8
      },
      {
        title: "App title 5",
        creator: "Netfront",
        status: "Published",
        stars: 3.8
      },
      {
        title: "App title 6",
        creator: "Netfront",
        status: "Published",
        stars: 0
      },
      {
        title: "App title 7",
        creator: "Netfront",
        status: "Published",
        stars: 4.0
      },
      {
        title: "App title 8",
        creator: "Netfront",
        status: "Published",
        stars: 3.8
      }
    ]
  };
  componentDidMount() {
    window.addEventListener("resize", this.windowResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  windowResize = () => {
    this.setState({ winSize: window.innerWidth });
  };

  handleScroll = () => {
    if (window.innerWidth <= 540 && window.pageYOffset > 100) {
      this.setState({ showGoTopBtn: true });
    } else {
      this.setState({ showGoTopBtn: false });
    }
  };

  onAppPublish = (item, index) => {
    const newList = this.state.appList.slice();
    newList[index].status =
      item.status === "Published" ? "Unpublished" : "Published";
    this.setState({ appList: newList });
  };

  backToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let goTopBtn = this.state.showGoTopBtn ? (
      <div className="goTopBtn" onClick={this.backToTop}>
        <Button src={GoTop} width="56" height="56" alt="goTop" />
      </div>
    ) : null;
    let listBody = this.state.appList.map((item, index) => {
      let statusStyling =
        item.status === "Published"
          ? Styling.myStatusGreen
          : Styling.myStatusRed;
      return (
        <div className="my-card" key={index}>
          <div className="my-card-img-cover">
            <label
              className={statusStyling}
              onClick={() => this.onAppPublish(item, index)}
            >
              {item.status}
            </label>
            <img className="my-card-img" src={Pic} alt="pic" />
          </div>
          <div className="my-card-body">
            <h3 className="card-text my-title">{item.title}</h3>
            <p className="card-text my-creator ">by {item.creator}</p>
            <Star star={item.stars} />
          </div>
        </div>
      );
    });
    return (
      <div>
        <NavBar />
        <AppTable>{listBody}</AppTable>
        {goTopBtn}
        <Footer />
      </div>
    );
  }
}

export default MyApp;
