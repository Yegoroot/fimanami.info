import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'

import ArSentence from 'components/Typography/ArSentence.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import JumlatuHaalPage from 'assets/jss/material-kit-react/views/JumlatuHaalPage.jsx'

class ProfilePage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="أدْوَات الجَزْم"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/bg4-norm.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}> لمْ - لَمّا - لا - لامْ الأمر </h1>

                            <Paper className={classes.paperStandart}>
                                <Paragraph>
                                    <h3 className={classes.title}>
                                        Отрицательная частица <ContrastWord inRu>لَمْ</ContrastWord>{' '}
                                    </h3>
                                    <h5>Приходит перед глаголами настоящего времени у ней две роли</h5>
                                    <ul>
                                        <li>Отрицает</li>
                                        <li>Меняет время на прошедшее</li>
                                    </ul>
                                    <ArSentence>
                                        <ContrastWord>لمْ</ContrastWord> أذهَبْ = ما ذهبتُ
                                    </ArSentence>
                                </Paragraph>

                                <ArSentence> لَمْ أذهبْ - لَمْ نَذهبْ</ArSentence>
                                <ArSentence> أنتَ لَمْ تَذهبْ - أنتِ لَمْ نَذهبِي</ArSentence>
                                <ArSentence> أنتُم لَمْ تَذهبُوا - أنتنّ لَمْ نَذهبْن</ArSentence>
                                <ArSentence> هو لَمْ يَذهبْ - هي لَمْ تَذهَبْ</ArSentence>
                                <ArSentence> هم لَمْ يَذهبُوا - هنّ لَمْ يذهَبْن</ArSentence>
                            </Paper>

                            <Paper className={classes.paperStandart}>
                                <h3 className={classes.title}>
                                    Частица <ContrastWord inRu>لَمّا</ContrastWord> (пока еще не, еще не)
                                </h3>
                                <h5>
                                    Отрицает и прошлый и настоящий момент, у لمّا есть высокий уровень возможности
                                    свершения
                                </h5>
                            </Paper>

                            <Paper className={classes.paperStandart}>
                                <h3 className={classes.title}>
                                    Частица отрицания<ContrastWord inRu> لا النّاهية </ContrastWord>
                                </h3>
                                <h5>Приходит только ко второму лицу настоящего времени!</h5>
                                <ArSentence> لا تَ‍‍ذهب‍‍وا الي المدرسة</ArSentence>
                                Не ходите в школу
                            </Paper>

                            <Paper className={classes.paperStandart}>
                                <h3 className={classes.title}>
                                    Частица приказа<ContrastWord inRu> لمْ الأمر </ContrastWord>
                                </h3>
                                <h5>Может прийти к любому лицу (Пусть он, пусть она)</h5>
                                <ArSentence> لِنَذْهَب الي المدرسة</ArSentence>
                                Пойдёмте в школу
                                <ArSentence> لِيَذهَبْ الي المدرسة</ArSentence>
                                Пусть он идёт в школу
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(JumlatuHaalPage)(ProfilePage)
