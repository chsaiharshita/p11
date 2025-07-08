import React, { Component } from "react";

import {
  getTradesDetails,
  getTradesLists,
  getTradesProfiles,
} from "../../utils/api.js";
import { Accordion, Card } from "react-bootstrap";
import { UncontrolledTooltip } from "reactstrap";

var Loader = require("react-loader");

class Popup extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <button
            className="d-flex justify-content-start button-block"
            onClick={this.props.closePopup}
          >
            <i className="fa fa-close" />
          </button>
          <Card className="p-5   ">
            <h4 className="text-center font-weight-bold  bg-dark text-white p-2">
              {`  Profile of ${this.props.details.iti_name}`}
            </h4>
            <table className="table-responsive-lg table-striped table-bordered ">
              <tbody className="">
                <tr>
                  <th className="font-weight-bold ">College Name</th>
                  <td>{this.props.details.iti_name}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">Total Strength</th>
                  <td>{this.props.details.tot_strength}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">Mobile</th>
                  <td>{this.props.details.mobile}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">Email</th>
                  <td>{this.props.details.email}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">LandLine</th>
                  <td>{this.props.details.landlinenumber}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">Address</th>
                  <td>{this.props.details.dist_name}</td>
                </tr>
                <tr>
                  <th className="font-weight-bold ">City</th>
                  <td>{this.props.details.city_town}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    );
  }
}

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtcode: "",
      ititype: "",
      iticode: "",
      orginalList: [],
      orginalProfile: {},
      posts: [],
      loader: true,
      errorMsg: "",
      selectindex: 0,
      showPopup: false,
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ loader: false });
    this.getResults();
  };

  async getResults() {
    const { districtcode, ititype } = this.state;
    var req = {
      ititype: ititype,
      districtcode: districtcode,
    };
    const { error, message, response } = await getTradesDetails(req);
    if (error) {
      this.setState({ errorMsg: message, loader: true });
    } else {
      this.setState({
        posts: response,
        orginalList: response,
        orginalProfile: response,
        loader: true,
      });
    }
  }

  async getListResults(item) {
    this.setState({ loader: false });
    const { iticode } = this.state;
    var req = {
      iticode: item.iti_code,
    };
    const { error, message, response } = await getTradesLists(req);
    if (error) {
      this.setState({ errorMsg: message, loader: true });
    } else {
      var newData = this.state.orginalList;
      let indexVal = newData.findIndex((obj) => obj.iti_code == item.iti_code);
      var subItem = {
        ...this.state.posts[indexVal],
        sublist: response,
      };
      newData[indexVal] = subItem;
      this.setState({ posts: newData, loader: true });
    }
  }

  
    
  render() {
    const { districtcode, ititype, posts, errorMsg } = this.state;
    return (
      <div>
        <div className="text-center ">
          <h3 className=" px-5  font-weight-normal my-5">
            ITI Profile with Trades & Strengths.
          </h3>
          
        </div>
        <div>
          <Loader
            loaded={this.state.loader}
            className=""
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          />
         
{posts.length ? (
            <>
          
              {
                <div className="container text-center">
                  <table className="table table-responsive-lg table-striped table-bordered table-hover">
                    <thead className="tableheader">
                      <tr className="text-center">
                        <th>S.No</th>
                        <th>ITICode</th>
                        <th>ITI Name</th>
                      </tr>
                    </thead>
                    
                    <tbody className=" ">
                      {posts.map((post, index) => (
                        <tr className="text-center">
                          <td className="pt-4"> {index + 1} </td>
                          <td className="pt-4">
                            <div className="app">
                              <a
                                className="text-center"
                                onClick={() => this.getProfileResults(post)}
                              >
                                <span
                                  style={{
                                    textDecoration: "underline",
                                    color: "blue",
                                  }}
                                  href="#"
                                  id="UncontrolledTooltipExample1"
                                >
                                  {post.iti_code}
                                </span>
                                <UncontrolledTooltip
                                  placement="right"
                                  target="UncontrolledTooltipExample1"
                                >
                                  Click here for College Profile.
                                </UncontrolledTooltip>
                              </a>

                              {this.state.showPopup ? (
                                <Popup
                                  text="detai Me"
                                  details={
                                    posts[this.state.selectindex]
                                      .originalProfile
                                  }
                                  closePopup={() =>
                                    this.setState({
                                      showPopup: false,
                                      loader: true,
                                    })
                                  }
                                />
                              ) : null}
                            </div>
                          </td>

                          <td>
                            <Accordion
                              onClick={() => this.getListResults(post)}
                            >
                              <Accordion.Toggle as={Card.Header} eventKey="0">
                                <a>
                                  <span
                                    style={{
                                      textDecoration: "underline",
                                      color: "blue",
                                      alignContent: "center",
                                    }}
                                    href="#"
                                    id="UncontrolledTooltipExample"
                                  >
                                    {post.project}
                                  </span>
                                  <UncontrolledTooltip
                                    placement="right"
                                    target="UncontrolledTooltipExample"
                                  >
                                    Click here for College Trades.
                                  </UncontrolledTooltip>
                                </a>
                              </Accordion.Toggle>
                              {post.sublist && post.sublist.length > 0 && (
                                <div className="container-fluid">
                                  {
                                    <Accordion.Collapse eventKey="0">
                                      <table className="table-responsive-lg  table-striped table-bordered table-hover table-success ">
                                        <thead className="sub__header">
                                          <tr>
                                            <th scoppe="col">Trade Name</th>
                                            <th scoppe="col">Strength</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {post.sublist.map((sublists) => (
                                            <tr>
                                              <td className="text-capitalize">
                                                {sublists.trade_name}
                                              </td>
                                              <td className="text-center">
                                                {sublists.strength}
                                              </td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </Accordion.Collapse>
                                  }
                                </div>
                              )}
                            </Accordion>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              }
            </>
          ) : null}
          {errorMsg ? (
            <div>
              <h1>Data Can Not Be Displayed </h1>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default index;
