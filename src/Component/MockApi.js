export const obj = {
  client: "Thunder Client",
  collectionName: "Internship 3 Sep 22",
  dateExported: "2022-09-09T06:29:46.546Z",
  version: "1.1",
  folders: [
    {
      _id: "42902ab8-2217-4b88-854a-f0015a8d1ea2",
      name: "Tags",
      containerId: "",
      created: "2022-09-04T03:55:54.278Z",
      sortNum: 10000,
    },
    {
      _id: "6e8df5c7-3918-4fda-bce1-5d430e8566ce",
      name: "GSTIN",
      containerId: "",
      created: "2022-09-04T03:55:54.281Z",
      sortNum: 30000,
    },
  ],
  requests: [
    {
      _id: "a5e2c64d-2a24-4d4e-84d7-f3d2bc81f265",
      colId: "03d0aa15-1f1d-4997-bbaa-9887b174bc2b",
      containerId: "42902ab8-2217-4b88-854a-f0015a8d1ea2",
      name: "Add Tag",
      url: "https://test1.taxadda.com/api/tag/add",
      method: "POST",
      sortNum: 10000,
      created: "2022-09-04T03:55:54.287Z",
      modified: "2022-09-08T09:14:04.865Z",
      headers: [],
      params: [],
      body: {
        type: "json",
        raw: '{\n  "name": "Tag 3",\n  "description": "des",\n  "user": "prateek@test.com"\n}',
        form: [],
      },
      auth: { type: "bearer" },
      tests: [],
    },
    {
      _id: "f719a5b6-a261-4d6f-933f-f47a6f4221ad",
      colId: "03d0aa15-1f1d-4997-bbaa-9887b174bc2b",
      containerId: "6e8df5c7-3918-4fda-bce1-5d430e8566ce",
      name: "Add GSTIN",
      url: "http://localhost:5001/api/gstin/add",
      method: "POST",
      sortNum: 15000,
      created: "2022-09-04T03:55:54.294Z",
      modified: "2022-09-08T10:47:12.226Z",
      headers: [],
      params: [],
      body: {
        type: "json",
        raw: '{\n  "gstin": [\n    "27AAACV2808C1ZP",\n    "08ADIPA5715B1Z3",\n    "08AAACH2702H1Z0",\n    "07AAACH2702H1Z2",\n    "20AAACH2702H1ZE",\n    "29AAACI4798L1ZU",\n    "36AAACI4798L1ZZ"\n  ],\n  "tags": ["63142ee9b62506421c242492"],\n  "user":"prateek@test.co"\n}',
        form: [],
      },
      auth: { type: "bearer" },
      tests: [],
    },
    {
      _id: "a4050a56-34a5-4f44-91d4-5f8390030e37",
      colId: "03d0aa15-1f1d-4997-bbaa-9887b174bc2b",
      containerId: "42902ab8-2217-4b88-854a-f0015a8d1ea2",
      name: "List tags",
      url: "https://test1.taxadda.com/api/tag/list?user=prateek@test.com",
      method: "GET",
      sortNum: 20000,
      created: "2022-09-04T03:55:54.311Z",
      modified: "2022-09-09T06:24:09.268Z",
      headers: [],
      params: [{ name: "user", value: "prateek@test.com", isPath: false }],
      auth: { type: "bearer" },
      tests: [],
    },
    {
      _id: "a2302f2d-9275-4a9b-a5e1-0074e2f34309",
      colId: "03d0aa15-1f1d-4997-bbaa-9887b174bc2b",
      containerId: "6e8df5c7-3918-4fda-bce1-5d430e8566ce",
      name: "Delete GSTIN",
      url: "https://test1.taxadda.com/api/gstin/delete",
      method: "POST",
      sortNum: 20000,
      created: "2022-09-04T04:55:52.612Z",
      modified: "2022-09-08T09:13:37.929Z",
      headers: [],
      params: [],
      body: {
        type: "json",
        raw: '{\n  "gstin": "27AAACV2808C1ZP",\n  "user": "prateek@test.com"\n}',
        form: [],
      },
      auth: { type: "bearer" },
      tests: [],
    },
    {
      _id: "aed9d779-7c87-41ff-985d-9a60b1d36dcf",
      colId: "03d0aa15-1f1d-4997-bbaa-9887b174bc2b",
      containerId: "6e8df5c7-3918-4fda-bce1-5d430e8566ce",
      name: "Get all GSTIN of a user",
      url: "https://test1.taxadda.com/api/gstin/?skip=0&limit=20&download=true&searchText&tags[]=628df7b40fedcce4178cb227&type=regular&user=prateek@test.com",
      method: "GET",
      sortNum: 25000,
      created: "2022-09-04T03:58:06.641Z",
      modified: "2022-09-08T10:57:51.949Z",
      headers: [],
      params: [
        { name: "skip", value: "0", isPath: false },
        { name: "limit", value: "20", isPath: false },
        { name: "download", value: "true", isPath: false },
        { name: "searchText", value: "", isPath: false },
        { name: "tags[]", value: "628df7b40fedcce4178cb227", isPath: false },
        { name: "type", value: "regular", isPath: false },
        { name: "user", value: "prateek@test.com", isPath: false },
      ],
      auth: { type: "bearer" },
      tests: [],
    },
  ],
  settings: {
    headers: [],
    tests: [],
    envId: "358b92b6-d8ee-44d7-abcc-63ae43253032",
  },
};

export function getImageMeta() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj);
    }, 100);
  });
}
