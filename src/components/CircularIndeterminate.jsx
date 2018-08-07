import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
})

function CircularIndeterminate(props) {
    const { classes } = props
    return(
        <div>
            <CircularProgress 
                className={classes.progress} 
                style={{ color: purple[500] }}
                size={50}
            />
        </div>
    )
}

CircularIndeterminate.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CircularIndeterminate) 