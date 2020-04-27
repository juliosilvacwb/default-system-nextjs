import { Grid, Tooltip, Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import ZBorderLinearProgress from './ZBorderLinearProgress';
import { useTranslation } from 'react-i18next';

const ZPreview = ({...props }) => {
    const { name, percent } = props.meta;
    const files = props.files;
    const remove = files.filter((item: any) => name === item.file.name)[0].remove;
    const { t } = useTranslation();
    return (
        <Grid item xs={12}>
            <div style={{display: 'flex'}}>
                <div style={{flexGrow: 1, paddingRight: '0.5em'}}>
                    <ZBorderLinearProgress
                        variant='determinate'
                        color='secondary'
                        value={percent}
                    />
                    <Grid container direction='row' justify='center' alignItems='center'>
                        <Grid item xs={6}>
                            <Typography variant='body2' gutterBottom>Filename: {name}</Typography>
                        </Grid>
                        <Grid item xs={6} style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Typography variant='body2' gutterBottom>{Math.round(percent)}%</Typography>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Tooltip title={t('dropzone.remove')} style={{float: 'right'}}>
                        <Clear color={'error'} onClick={ () => remove()} style={{cursor: 'pointer'}}/>
                    </Tooltip>
                </div>
            </div>
        </Grid>
    );
};

export default ZPreview;
