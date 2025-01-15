# [MJT Services](https://github.com/mjt-services) ASR Service frontend 2025

This project is an ASR (Automatic Speech Recognition) service that works within the context of the [MJT Services](https://github.com/mjt-services) and relies upon the [MQ Service 2025](https://github.com/mjt-services/mq-service-2025) for message queue functionality and [ASR Service Backend Whisper 2025](https://github.com/mjt-services/asr-service-backend-whisper-2025) for whisper model inference.

## Documentation

For detailed documentation, please visit the [project documentation](https://mjt-services.github.io/asr-service-2025/).

## Environment Configuration

The `.env` file is used to configure environment variables for the project. You should create a `.env` file in the root directory of the project. You can use the following example as a template:

```properties
IMAGE_TAG=mjtdev/asr:latest
NAME=asr
NETWORK_NAME=mq_network
NATS_AUTH_TOKEN=<your_nats_auth_token_here>
ASR_BACKEND_URL=http://asr-backend-whisper:9000
```

Make sure to replace `your_nats_auth_token_here` with your actual NATS authentication token.

See https://github.com/ahmetoner/whisper-asr-webservice for more information on the `ASR_ENGINE` and `ASR_MODEL` environment variables.

### Thanks

Special thanks to [Ahmet Öner](https://github.com/ahmetoner) for the [whisper-asr-webservice](https://github.com/ahmetoner/whisper-asr-webservice) docker image.

