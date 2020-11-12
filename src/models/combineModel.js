export const combineFormDefination = {
  title: 'Combine Video(s)',
  elements: [
    {
      id: 'combine-video',
      className: 'combine-video',
      label: 'Video Link',
      type: 'text',
      value: '',
      validation: {
        method: 'isValidUrl',
      },
    },
    {
      id: 'combine-video-range-duration-start',
      className: 'combine-video-range-duration-start',
      label: 'Start at (in seconds)',
      type: 'text',
      value: '',
      validation: {
        method: 'isPositiveWithZero',
      },
    },
    {
      id: 'combine-video-range-duration-end',
      className: 'combine-video-range-duration-end',
      label: 'End at (in seconds)',
      type: 'text',
      value: '',
      validation: {
        method: 'isPositive',
      },
    },
    {
      id: 'delete-combine-video-range-duration',
      className: 'delete-combine-video-range-duration',
      label: 'Delete',
      color: 'secondary',
      type: 'button',
      value: '',
    },
  ],
  videoDimentions: [
    {
      id: 'video-height',
      className: 'video-height',
      label: 'Video Height',
      type: 'text',
      value: '',
      validation: {
        method: 'isPositive',
      },
    },
    {
      id: 'video-width',
      className: 'video-width',
      label: 'Video Width',
      type: 'text',
      value: '',
      validation: {
        method: 'isPositive',
      },
    },
  ],
};
