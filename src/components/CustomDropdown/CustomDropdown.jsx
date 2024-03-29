import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// nodejs library to set properties for components
import PropTypes from 'prop-types'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import Divider from '@material-ui/core/Divider'
// import Icon from '@material-ui/core/Icon'
import Popper from '@material-ui/core/Popper'

// core components
import Button from 'components/CustomButtons/Button.jsx'

import customDropdownStyle from 'assets/jss/material-kit-react/components/customDropdownStyle.jsx'

import withSizes from 'react-sizes'

class CustomDropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClick() {
    if (!this.props.isMobile) {
      this.setState(state => ({ open: !state.open }))
    }
  }
  handleClose(param) {
    if (!this.props.isMobile) {
      this.setState({ open: false })
      if (this.props && this.props.onClick) {
        this.props.onClick(param)
      }
    }
  }
  handleCloseAway = event => {
    if (!this.props.isMobile) {
      if (this.anchorEl.contains(event.target)) {
        return
      }
      this.setState({ open: false })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.isMobile !== nextProps.isMobile ||
      this.state.open !== nextState.open
    )
  }

  render() {
    const { open } = this.state

    const isOpenWithMobile = this.props.isMobile ? true : open

    const {
      classes,
      buttonText,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      left,
      rtlActive,
      noLiPadding,
    } = this.props
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretActive]: isOpenWithMobile,
      [classes.caretRTL]: rtlActive,
    })
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive,
    })
    let dropdownClasses = classNames({
      dropdown: true,
      [classes.dropdown]: true,
    })

    return (
      <div>
        <div>
          <Button
            aria-label="not"
            aria-owns={isOpenWithMobile ? 'menu-list' : null}
            aria-haspopup="true"
            {...buttonProps}
            buttonRef={node => {
              this.anchorEl = node
            }}
            onClick={this.handleClick}
          >
            {buttonText !== undefined ? buttonText : null}
            {!this.props.isMobile && caret ? (
              <b className={caretClasses} />
            ) : null}
          </Button>
        </div>
        <Popper
          open={isOpenWithMobile}
          anchorEl={this.anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left
                ? 'top-start'
                : 'top'
              : left
              ? 'bottom-start'
              : 'bottom'
          }
          className={classNames({
            // [classes.pooperMobileOpen]: this.props.isMobile && !open,
            [classes.popperClose]: !isOpenWithMobile,
            [classes.pooperResponsive]: true,
          })}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              in={isOpenWithMobile}
              id="menu-list"
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={dropdownClasses}>
                <ClickAwayListener onClickAway={this.handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop, key) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={this.handleClose}
                            className={classes.dropdownDividerItem}
                          />
                        )
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={this.handleClose}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      )
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
  }
}

CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: 'primary',
}

CustomDropdown.propTypes = {
  classes: PropTypes.object.isRequired,
  hoverColor: PropTypes.oneOf([
    'black',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func,
}

const mapSizesToProps = ({ width }) => ({ isMobile: width < 960 })

export default withSizes(mapSizesToProps)(
  withStyles(customDropdownStyle)(CustomDropdown)
)
