import { createSlice } from '@reduxjs/toolkit';

export const parametersSlice = createSlice({
  name: 'parameters',
  initialState: {
    parameters: [{
      "prompt": "an epic landscape",
      "seed": -1,
      "batch_size": 1,
      "steps": 10,
      "cfg_scale": 7,
      "width": 512,
      "height": 512,
      "restore_faces": false,
      "tiling": false,
      "negative_prompt": "(bad_prompt:0.8)",
      "sampler_index": "Euler a",
      "enable_hr": true,
      "hr_upscaler": "R-ESRGAN 4x+ Anime6B",
      "hr_scale": 2,
      "hr_second_pass_steps": 20,
      "denoising_strength": 0.7,
    }],
  },
  reducers: {
    setParameters: (state, action) => {
      state.parameters = action.payload;
    }
  },
});

export const { setParameters } = parametersSlice.actions;

export default parametersSlice.reducer;
