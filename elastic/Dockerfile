FROM docker.elastic.co/elasticsearch/elasticsearch:7.17.29

RUN groupmod -g 1008 elasticsearch
RUN usermod -u 1008 -g 1008 elasticsearch
RUN chown -R elasticsearch /usr/share/elasticsearch
RUN sed -i -e 's/--userspec=1000/--userspec=1008/g' \
    -e 's/UID 1000/UID 1008/' \
    -e 's/chown -R 1000/chown -R 1008/' /usr/local/bin/docker-entrypoint.sh
RUN chown elasticsearch /usr/local/bin/docker-entrypoint.sh
