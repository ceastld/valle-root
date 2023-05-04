#python 3.8
# conda create --name valle python=3.8
# conda activate valle

# pytorch
pip install torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchaudio==0.13.1 --extra-index-url https://download.pytorch.org/whl/cu117
pip install torchmetrics==0.11.1

# fbank
pip install librosa==0.8.1

# phonemizer
# apt-get install espeak-ng
## OSX: brew install espeak
pip install phonemizer
pip install matplotlib

# lhotse
# https://github.com/lhotse-speech/lhotse/pull/956
pip install git+https://github.com/lhotse-speech/lhotse

# k2
# find the right version in https://huggingface.co/csukuangfj/k2
pip install https://huggingface.co/csukuangfj/k2/resolve/main/cuda/k2-1.23.4.dev20230224+cuda11.7.torch1.13.1-cp38-cp38-linux_x86_64.whl

# icefall
# git clone https://github.com/k2-fsa/icefall

cd icefall
pip install -r requirements.txt
export PYTHONPATH=`pwd`/../icefall:$PYTHONPATH
# echo "export PYTHONPATH=`pwd`/../icefall:\$PYTHONPATH" >> ~/.zshrc
# echo "export PYTHONPATH=`pwd`/../icefall:\$PYTHONPATH" >> ~/.bashrc
cd -
# source ~/.zshrc

# valle
# git clone https://github.com/lifeiteng/valle.git

cd valle
pip install -e .

pip install h5py
