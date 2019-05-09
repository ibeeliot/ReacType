import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import GetAppIcon from '@material-ui/icons/GetApp';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = () => ({
  iconSmall: {
    fontSize: 10,
  },
  button: {
    // borderRight: '1px solid grey',
    borderRadius: '0px',
    backgroundColor: '#212121',

    '&:hover > span > svg': {
      color: '#1de9b6',
      transition: 'all .2s ease',
    },
    '&:hover': {
      backgroundColor: '#212121',
    },
    '&:disabled': {
      backgroundColor: '#424242',
    },

    '&:disabled > span > svg': {
      color: '#eee',
      opacity: '0.3',
    },
  },
  light: {
    color: '#eee',
    // opacity: '0.7',
  },
  dark: {
    color: '#1de9b6',
  },
});

const MainContainerHeader = (props) => {
  const {
    classes,
    image,
    // showImageDeleteModal,
    updateImage,
    totalComponents,
    showGenerateAppModal,
    collapseColumn,
    rightColumnOpen,
  } = props;

  return (
    <div className="main-header">
      <div className="main-header-buttons">
        {/* <Tooltip title="remove image">
          <div>
            <Button
              disabled={!image}
              color="default"
              className={classes.button}
              onClick={showImageDeleteModal}
            >
              <DeleteOutlineIcon className={classes.light} />
            </Button>
          </div>
        </Tooltip>
        <Tooltip title={image ? 'update image' : 'upload image'}>
          <div>
            <Button color="default" className={classes.button} onClick={updateImage}>
              <ImageSearchIcon className={classes.light} />
            </Button>
          </div>
        </Tooltip> */}
        <div>
          <Button
            color="primary"
            variant="text"
            // variant="outlined"
            className={classes.clearButton}
            disabled={totalComponents < 1}
            onClick={showGenerateAppModal}
          >
            <GetAppIcon
              className={classes.light}
              style={{ paddingLeft: '5px', paddingRight: '5px' }}
            />
            Export Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainContainerHeader);