import { HashMap } from "./hash-map";

const map = new HashMap<string, number>();

test("Retreiving Value of A Non-Existent Key", () => {
  expect(map.get("non-existing-key")).toBeUndefined();
});

test("Inserting 5 Keys", () => {
  for (let i = 0; i < 5; ++i) {
    map.set(`key${i}`, i);
  }
});

test("Retrieving Value of 5 Existing Keys", () => {
  for (let i = 0; i < 5; ++i) {
    expect(map.get(`key${i}`)).toBe(i);
  }
});

test("Checking Length of Map with 5 Elements", () => {
  expect(map.length).toBe(5);
});

test("Clearing the Map with 5 Elements", () => {
  map.clear();
});

test("Checking the Length of the Map After Clearing", () => {
  expect(map.length).toBe(0);
});

test("Inserting 1000 Keys", () => {
  for (let i = 0; i < 1000; ++i) {
    map.set(`key${i}`, i);
  }
});

test("Retrieving Value of 1000 Existing Keys", () => {
  for (let i = 0; i < 1000; ++i) {
    expect(map.get(`key${i}`)).toBe(i);
  }
});

test("Checking Length of Map with 1000 Elements", () => {
  expect(map.length).toBe(1000);
});
