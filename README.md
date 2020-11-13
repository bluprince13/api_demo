# README

This package demonstrates how we can use web APIs to allow programs to communicate
with each other. The code here is illustrative only. I've tried to keep it as
simple as possible, and this definitely is not typical of production code. This
example also does not include any architecture and only runs locally on your
machine.

There are three folders.

- **js**: JavaScript package with an API to find average of two numbers
- **python**: Python package with an API to find sum of two numbers
- **frontend**: A simple UI where the user can request the average of two
    numbers

The frontend calls the JS API which calls the python API.

## How to install and run

Run the following in three separate terminal windows.

```bash
    cd python
    pipenv install
    pipenv shell
    python main.py # serves the POST /add api on localhost:5000
```

```bash
    cd js
    yarn install
    yarn run start # serves the POST /average api on localhost:3000
```

```bash
    cd js
    yarn run serve # serves the frontend locally
```

That's all, folks.
