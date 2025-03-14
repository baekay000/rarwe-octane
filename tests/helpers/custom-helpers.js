import { click, fillIn } from '@ember/test-helpers';

export async function createBand(name) {
  await click('[data-test-rr="new-band-button"]');
  await fillIn('[data-test-rr="new-band-name"]', name);
  return click('[data-test-rr="save-band-button"]');
}

export async function createSong(name) {
  // await pauseTest();
  await click('[data-test-rr="new-song-button"]');
  // await pauseTest();

  await fillIn('[data-test-rr="new-song-title"]', name);
  // await pauseTest();
  return click('[data-test-rr="save-song-button"]');
}
