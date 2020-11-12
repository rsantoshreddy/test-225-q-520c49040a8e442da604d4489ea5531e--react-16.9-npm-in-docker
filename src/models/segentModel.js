export const segmentFormDefination = {
  title: 'Segment Video',
  elements: [
    {
      id: 'video-link',
      className: 'video-link',
      label: 'Video Link',
      placeholder: 'Video Link...',
      type: 'text',
      value: '',
      validation: {
        method: 'isValidUrl',
      },
    },
    {
      id: 'segment-setting',
      className: 'segment-setting',
      label: 'Select Segment Settings...',
      type: 'select',
      value: '',
      options: [
        {
          id: 'interval-duration',
          value: 'Interval Duration',
          label: 'Interval Duration',
        },
      ],
      validation: {
        valueInList: ['Interval Duration'],
      },
    },
    {
      id: 'interval-duration',
      className: 'interval-duration',
      label: 'Interval Duration...',
      type: 'text',
      value: '',
      validation: {
        method: 'isPositive',
      },
    },
  ],
};
