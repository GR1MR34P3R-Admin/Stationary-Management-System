import { StationaryItem, StationaryIssue, Employee } from "./types";

// Initial sample data
export const initialInventory: StationaryItem[] = [
  {
    id: "1",
    name: "Ballpoint Pen",
    category: "Writing Instruments",
    stockQuantity: 150,
    unit: "pcs",
    threshold: 30
  },
  {
    id: "2",
    name: "Notebook",
    category: "Paper Products",
    stockQuantity: 75,
    unit: "pcs",
    threshold: 15
  },
  {
    id: "3",
    name: "Sticky Notes",
    category: "Paper Products",
    stockQuantity: 100,
    unit: "pads",
    threshold: 20
  },
  {
    id: "4",
    name: "Stapler",
    category: "Office Equipment",
    stockQuantity: 25,
    unit: "pcs",
    threshold: 5
  },
  {
    id: "5",
    name: "Highlighter",
    category: "Writing Instruments",
    stockQuantity: 60,
    unit: "pcs",
    threshold: 10
  }
];

export const employees: Employee[] = [
  { id: "1", name: "John Doe", department: "Engineering" },
  { id: "2", name: "Jane Smith", department: "Marketing" },
  { id: "3", name: "Michael Johnson", department: "Finance" },
  { id: "4", name: "Emily Williams", department: "Human Resources" },
  { id: "5", name: "David Brown", department: "Operations" }
];

export const initialIssues: StationaryIssue[] = [
  {
    id: "1",
    employeeId: "1",
    employeeName: "John Doe",
    department: "Engineering",
    items: [
      { itemId: "1", itemName: "Ballpoint Pen", quantity: 5 },
      { itemId: "2", itemName: "Notebook", quantity: 2 }
    ],
    issueDate: "2023-10-15",
    status: "issued",
    signatureData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABHtJREFUeF7t3DFOKlEYhmE+ExIaGxtjYWFhY2NnZ0lNTOwsjY0FjbGxsKGhsRvDeNeA94KMzMD3Nsya5c+ZeZ71xwEXX6/X6/AQIEAgQOACrIArEiFA4L+AgOWFQIBAjICA1XIqBgkQELC8BggQiBEQsFpOxSABAgKW1wABAjECAlbLqRgkQEDA8hogQCBGQMBqORWDBAgIWF4DBAjECAhYLadikAABAcvL4NMCN9fX4fnp6dPzeQECvQUErN6nZ3cCBP4oIGAZDwQIxAgIWC2nYpAAAQHL+AYCb7fb8PryEn5/fw0HgRgBASvmKDp3+fr6Gj4+PjqXt3efwNXlZbi7vd0dSMCKv6KAFXxAv7+/w+PDQ/AMowTeBQQsrwQCBGIEBKyWUzFIgICA5TVAgECMgIDVcioGCRAQsLwGCBCIERCwWk7FIAECApbXAAECMQICVsupGCRAQMDyGiBAIEZAwGo5FYMECAhYXgMECMQICFgtp2KQAAEBy2uAAIEYAQGr5VQMEiAgYHkNECAQIyBgtZyKQQIEBCyvAQIEYgQErJZTMUiAgIDlNUCAQIyAgNVyKgYJEBCwvAYIEIgRELBaTsUgAQIClnHo7f4wbA7D+e1xGB62u+G4/Q8Cc1xufRiWNzfhsNkMy2E4jYthuL4Kw/U8/wE57WXOz6/Lc7f/7cCYgDX3KJ3n+F/fv2+Ow8vz870Tl/O8cE5b/OXm67yXfz17Alb+GXUe8O3DQzjMs88Xp6fzZ3eH4fnxMX8HGxAYISBgjcBKfOrDcBo+9wHrrfF4ELgI/KT/hvhvuQgIWBcnzxIgsLbAT7oVXBtI/gQIzCsgYM17ts5GgEBHQMDq4FqaAIG5BQSsuf85ztkIEOgICFgdXEsTIDC3gIA1+dnO+dnFmwtnFxcd3mdFLwICVjf28/+59duzH5sj4bDZnu9vGe8JCFg9XUv3JkAgREDACjkIYwQI9AQErF6u9iZAIERAwAo5CGMECPQEBKxerr3nri7Dd7i3OzyefYHB/PpCAlaXVsHi75d2z28Pz8LB5+1/j/99R8H81wQErGvBv9T/+qbQmYC1EMDzv7+kC7Ro3zLnSvXf9zpr/NsBFvs5sYCA9YkXlYAFeQW+/35K/2tPwFrh+hKwVkA9S+R8vTkvNffBCVhzn68zEiDQFhCw2ryWJ0BgZgEBa+YDdDoCBNoCAlZbd7Z3U8zGB7N83pzXQ3tnAWu1E12+E2C1I3hTLJrv/p3t8vJ/O9zZoM5/BT51c3t2lOCJvdMJWL3by3cVvDNbftnzCwLWdZc3/dafERCwrgsv/mrvzNZWF7DO7N/+qdvBM87b3lrA6t1/9vfRZz80b00FBKymc1k/toCVfUbmPysw9x+0AcuVEhCwAs7AyPMJCFgxV1PACjkIY8kCc/933wJWzKslYMUchTECfwUErJhrClgxR2GMAIHXJUq++JcvAAAAAElFTkSuQmCC",
    signedDate: "2023-10-15"
  },
  {
    id: "2",
    employeeId: "2",
    employeeName: "Jane Smith",
    department: "Marketing",
    items: [
      { itemId: "3", itemName: "Sticky Notes", quantity: 3 },
      { itemId: "5", itemName: "Highlighter", quantity: 2 }
    ],
    issueDate: "2023-10-17",
    status: "partial-return",
    signatureData: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAABNlJREFUeF7t3D9OKlEYxeF5JiQ0NjbGwsLCxsbOztKamNhZGhsLGmNjQUNDY1djvGvAewFHZoZ5z9BZK8vJfN93fQkOXn69Xq/DQ4AAgQCBC7ACVmREAgT+CwhYPggECMQICFgtq2KQAAEBy2eAAIEYAQGrZVUMEiAgYPkMECAQIyBgtayKQQIEBCyfAQIEYgQErJZVMUiAgIDlM0CAQY7i9uoqPD4+xmQxaK6AgJW7OiMTIJAsIGB5QxAgECMgYLWsikECBAQsnwECBGIEBKyWVTFIgICA5TnXF3g+nYb9bnccw+VlOOx2x3/7lUCrgICVu3mjEyAQLCBgBS/P6AQI9AUErL6PPwkQCBYQsIIXZ3QCBPoCAqCu8gcAAATqSURBVFbfx58ECAQLZAW4w+EQHh4egtczO/r7+3s47HcBs9xfX4fj42Pe8GYmIGB5QxAgECMgYLWsikECBAQsnwECBGIEBKyWVTFIgICA5TNAgECMgIDVsioGCRAQsHwGCBCIERCwWlbFIAECApbPAAECMQICVsuqGCRAQMDyGSBAIEZAwGpZFYMECAhYPgMECMQICFgtq2KQAAEBy2eAAIEYAQGrZVUMEiAgYPkMECAQIyBgtayKQQIEBCyfAQIEYgQErJZVMUiAgIDlM0CAQY7C8Hg8vh9P6/hhvXhZ/3x//LFOHP8Y7q6vw2G/P97fB7f7I2NbGbIAAcuboVUgc/7Dbtdhd4e3d7ffboUuawP7wQUsCwr3y8z3d/vDcbcLz6eTkbkWtcafLMb92Ol+M+MXZm7bSsCSsZYTyPp+fQtEUtVyPllPljfUsk+Wp88nYE3XcsdCAjfXV+H58Sm8vryEt9fXMbJ9+7L+9ew2/AhRb5/v8SkKWIvtP69RQODq8jJMiUxvH7G+/f5H8BpCWu/ns7/Tvr4dFvjIeYmLgMD0FH3fr+Df0vnfH5+IueKBr9+7gNVf6NQUXa45f7XE3XF+0wUErOmW2Xf4/qXf8c8kkGVfqc+MTcDyGSBAIEZAwGpZFYMECAhYPgMECMQICFgtq2KQAAEBy2eAAIEYAQGrZVUMEiAgYPkMECAQIyBgtayKQQIEBCyfAQIEYgQErJZVMUiAgIDlM0CAQY7A/f1deLi/j8li0FwBASt3dUYmQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFRCwctdnegIEkgUErOQFmp0AgVwBASt3faYnQCBZQMBKXqDZCRDIFfgHX1pIPgmyjmkAAAAASUVORK5CYII=",
    signedDate: "2023-10-17"
  },
  {
    id: "3",
    employeeId: "3",
    employeeName: "Michael Johnson",
    department: "Finance",
    items: [
      { itemId: "1", itemName: "Ballpoint Pen", quantity: 3 },
      { itemId: "4", itemName: "Stapler", quantity: 1 }
    ],
    issueDate: "2023-10-20",
    status: "pending"
  }
];

// Categories for selection
export const categories = [
  "Writing Instruments",
  "Paper Products",
  "Office Equipment",
  "Organizational Supplies",
  "Technology Accessories",
  "Miscellaneous"
];
