import React, { useState } from 'react';
import FormWithTitle from './FormWithTitle';
import Field from './Field';
import Fields from './Fields';
import Box from '@material-ui/core/Box';
import { combineFormDefination } from '../models/combineModel';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Video from './Video';
import { validate } from '../utils/utils';
import VideoApi from '../utils/apis';

const Combine = () => {
  const { title, elements, videoDimentions } = combineFormDefination;
  const [videoElements, setVideoElements] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [dimentions, setVideoDimentions] = useState(
    videoDimentions.map((d) => ({ ...d }))
  );
  const [isValid, setIsValid] = useState(false);
  const [videoError, setVideoError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const addVideo = () => {
    const fieldElements = elements.map((element) => ({ ...element }));
    setVideoElements([...videoElements, fieldElements]);
    setIsValid(
      validate([...[].concat(...videoElements, fieldElements), ...dimentions])
    );
  };

  const onDelete = (e) => {
    const elementNumber = e.currentTarget.id.split('-').pop();
    videoElements.splice(elementNumber - 1, 1);
    setVideoElements([...videoElements]);
    setIsValid(validate([...[].concat(...videoElements), ...dimentions]));
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    const idParts = id.split('-');
    const elementNumber = idParts.pop();
    const fieldId = idParts.join('-');
    const videoElement = videoElements[elementNumber - 1];
    videoElement.forEach((element) => {
      if (element.id === fieldId) {
        element.value = value;
      }
    });
    setVideoElements([...videoElements]);
    setIsValid(validate([...[].concat(...videoElements), ...dimentions]));
  };

  const onDimentionsChange = (e, index) => {
    dimentions[index].value = e.target.value;
    const d = dimentions.map((d) => ({ ...d }));
    setVideoDimentions([...d]);
    setIsValid(validate([...[].concat(...videoElements), ...dimentions]));
  };

  const combineVideos = () => {
    setDisabled(true);
    VideoApi.combine(videoElements, dimentions)
      .then((res) => {
        setDisabled(false);
        console.log(res);
        if (res.video_url) {
          setVideoUrl(res.video_url);
        } else {
          setVideoError('Something went wrong, please try again...');
        }
      })
      .catch((e) => {
        setDisabled(false);
        setVideoError('Something went wrong, please try again...');
      });
  };

  return (
    <FormWithTitle className='combine-form' title={title}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button
                variant='contained'
                color='secondary'
                className='add-video'
                onClick={addVideo}
              >
                Add Video
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            {videoElements.map((videoElement, fieldIndex) => (
              <Grid container spacing={2} alignItems='flex-end'>
                <Fields
                  elements={videoElement}
                  fieldIndex={fieldIndex}
                  onDelete={onDelete}
                  onChange={onChange}
                />
              </Grid>
            ))}
          </Grid>
          {videoElements.length
            ? dimentions.map((dimention, fieldIndex) => (
                <Grid item xs={2}>
                  <Field
                    {...dimention}
                    fieldNumber={fieldIndex}
                    onChange={onDimentionsChange}
                  />
                </Grid>
              ))
            : null}
          <Grid item xs={12}>
            {isValid ? (
              <Button
                variant='contained'
                color='secondary'
                onClick={combineVideos}
                disabled={disabled}
              >
                Combine Video(s)
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </form>
      {videoUrl && !videoError ? <Video src={videoUrl} /> : <p>{videoError}</p>}
    </FormWithTitle>
  );
};

export default Combine;
