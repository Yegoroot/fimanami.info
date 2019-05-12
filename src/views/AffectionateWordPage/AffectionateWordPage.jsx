import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import ContrastWord from "components/Typography/ContrastWord.jsx";
import ArSent from "components/Typography/ArSent.jsx";

import HeaderLinks from "components/Header/HeaderLinks.jsx";

import Parallax from "components/Parallax/Parallax.jsx";

import arabicPageStyle from "assets/jss/material-kit-react/views/arabicPage.jsx";

class AffectionateWordPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          brand="Уменьшительно ласкательные"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: "white"
          }}
          {...rest}
        />

        <Parallax small filter image={require("assets/img/mosque/mosque16.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className={classes.title}>Уменьшительно ласкательные</h1>

              <ArSent translate={"Мальчёнка, мальчишка"}>
                <ContrastWord red> وُلَيْدُ </ContrastWord>: وَلَدُ صَغِير
              </ArSent>
              <ArSent translate={"Горка"}>
                <ContrastWord red> جُبَيْلُ </ContrastWord>: جَبَلُ صَغِير
              </ArSent>
              <ArSent translate={"Речка"}>
                <ContrastWord red> نُهَيْرُ </ContrastWord>: نَهْرُ صَغِير
              </ArSent>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(arabicPageStyle)(AffectionateWordPage);
