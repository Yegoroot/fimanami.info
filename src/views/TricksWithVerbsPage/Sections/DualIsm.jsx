import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { Paper, Grid } from "@material-ui/core";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import arabicPage from "assets/jss/material-kit-react/views/arabicPage.jsx";

import ArSent from "components/Typography/ArSent.jsx";
import Word from "components/word";
import ContrastWord from "components/Typography/ContrastWord.jsx";

const gridStyle = {
  padding: "0 18px"
};

class DualIsm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="dual">
        <div className={classes.container}>
          <h3 className={classes.title}>Глаголы для двойственных чисел</h3>
          <Paper>
            <div className="wrap1">
              <Grid container>
                <Grid item xs="12" sm="4" style={gridStyle}>
                  <ContrastWord inRu>الماضى</ContrastWord>
                  <ArSent>
                    <Word root="ذهبْ" suffix="تُما" />
                    <br />
                    <Word root="ذهب" suffix="ا" />
                    {" - "}
                    <Word root="ذهبَ" suffix="تَا" />
                  </ArSent>
                </Grid>

                <Grid item xs="12" sm="4" style={gridStyle}>
                  <ContrastWord inRu>المضارع</ContrastWord>
                  <ArSent>
                    <Word prefix="تَ" root="ذْهبَ" suffix="انِ" />
                    <br />
                    <Word prefix="يَ" root="ذْهبَ" suffix="انِ" />
                    {" - "}
                    <Word prefix="تَ" root="ذْهبَ" suffix="انِ" />
                  </ArSent>
                </Grid>

                <Grid item xs="12" sm="4" style={gridStyle}>
                  <ContrastWord inRu>الأمر</ContrastWord>
                  <ArSent>
                    <Word prefix="اِ" root="ذْهَبَ" suffix="ا" />
                  </ArSent>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>

        <Clearfix />
      </div>
    );
  }
}

export default withStyles(arabicPage)(DualIsm);
