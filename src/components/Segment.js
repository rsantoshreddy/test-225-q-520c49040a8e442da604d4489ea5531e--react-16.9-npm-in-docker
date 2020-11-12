import React, { useState } from 'react';
import FormWithTitle from './FormWithTitle';
import Field from './Field';
import { segmentFormDefination } from '../models/segentModel';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Video from './Video';
import { validate } from '../utils/utils';
import VideoApi from '../utils/apis';

const Segment = () => {
  const { title } = segmentFormDefination;
  const [elements, setElements] = useState([
    ...segmentFormDefination.elements.filter((e) => ({ ...e })),
  ]);
  const [videos, setVideos] = useState([]);
  // const [disabled, setDisabled] = useState(false);
  const [videoError, setVideoError] = useState('');

  const [isValidInput, setValidInput] = useState(false);
  const onChange = (e, fieldNumber) => {
    const { value } = e.target;
    const field = elements[fieldNumber];
    field.value = value;
    setElements([...elements]);
    setValidInput(validate(elements));
    setVideoError('');
  };

  const segmentVideo = () => {
    // setDisabled(true);
    VideoApi.segment(elements)
      .then((res) => {
        if (res.interval_videos) {
          setVideos(res.interval_videos);
        } else {
          setVideoError('Something went wrong, please try again...');
        }
        // setDisabled(false);
      })
      .catch((e) => {
        setVideoError('Something went wrong, please try again...');
        // setDisabled(false);
      });
  };

  return (
    <FormWithTitle className='segment-form' title={title}>
      <form>
        <Grid container spacing={3}>
          {elements.map((element, fieldNumber) => (
            <Grid item xs={12} key={element.id}>
              <Field
                {...element}
                onChange={onChange}
                fieldNumber={fieldNumber}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='secondary'
              onClick={segmentVideo}
              className='process-video'
              disabled={!isValidInput}
            >
              Segment Video
            </Button>
          </Grid>
        </Grid>
      </form>
      {!videoError ? (
        <Grid container spacing={3} justify='center'>
          {videos.map((video) => (
            <Grid item>
              <Video src={video.video_url} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>{videoError}</p>
      )}
    </FormWithTitle>
  );
};

export default Segment;
